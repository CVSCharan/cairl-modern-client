import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";

const NewsLetters = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState("");
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);

  // State for the profile form
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    occupation: "",
    org: "",
    country: "",
    interests: [] as string[],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfile({ ...profile, [id]: value });
  };

  const handleSelectChange = (id: string, value: string) => {
    setProfile({ ...profile, [id]: value });
  };

  const handleInterestChange = (
    interestId: string,
    checked: boolean | "indeterminate"
  ) => {
    setProfile((prevProfile) => {
      const newInterests = checked
        ? [...prevProfile.interests, interestId]
        : prevProfile.interests.filter((i) => i !== interestId);
      return { ...prevProfile, interests: newInterests };
    });
  };

  const handleSubscribeClick = async () => {
    if (!email) {
      setError("Email address is required.");
      return;
    }
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/newsletter/check?email=${email}`,
        {
          method: "GET",
        }
      );

      if (response.status === 404) {
        setOpen(true);
        return;
      }

      if (response.ok) {
        const data = await response.json();
        if (data.subscribed && data.active) {
          setError("This email is already subscribed and active.");
        } else {
          setOpen(true);
        }
      } else {
        const errorData = await response
          .json()
          .catch(() => ({ message: "An unexpected error occurred." }));
        setError(errorData.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      setError(
        "Failed to connect to the server. Please check your connection and try again."
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalLoading(true);
    setModalError("");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/newsletter`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, ...profile }),
        }
      );

      if (response.ok) {
        setShowSuccessScreen(true);
      } else {
        const errorData = await response
          .json()
          .catch(() => ({ message: "An unexpected error occurred." }));
        setModalError(
          errorData.message || "An error occurred. Please try again."
        );
      }
    } catch (error) {
      setModalError(
        "Failed to connect to the server. Please check your connection and try again."
      );
      console.error(error);
    } finally {
      setModalLoading(false);
    }
  };

  const handleDialogClose = () => {
    setOpen(false);
    setShowSuccessScreen(false);
    setProfile({
      firstName: "",
      lastName: "",
      gender: "",
      occupation: "",
      org: "",
      country: "",
      interests: [],
    });
    setEmail("");
    setError("");
    setModalError("");
  };

  useEffect(() => {
    if (showSuccessScreen) {
      const timer = setTimeout(() => {
        handleDialogClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showSuccessScreen]);

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "non-binary", label: "Non-binary" },
    { value: "other", label: "Other" },
    { value: "prefer-not-to-say", label: "Prefer not to say" },
  ];

  const occupationOptions = [
    { value: "student", label: "Student" },
    { value: "professional", label: "Working Professional" },
    { value: "researcher", label: "Researcher" },
    { value: "educator", label: "Educator" },
    { value: "ai-enthusiast", label: "AI Enthusiast" },
    { value: "other", label: "Other" },
  ];

  const interestsOptions = [
    { id: "technology", label: "Technology" },
    { id: "business", label: "Business" },
    { id: "health", label: "Health" },
    { id: "education", label: "Education" },
    { id: "entertainment", label: "Entertainment" },
    { id: "finance", label: "Finance" },
    { id: "science", label: "Science" },
    { id: "sports", label: "Sports" },
  ];

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => !isOpen && handleDialogClose()}
    >
      {/* Professional Newsletter Section */}
      <div className="bg-secondary py-20 border-t">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4 tracking-tight">
              Stay Connected
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter to stay ahead in AI.
            </p>
          </div>

          {/* Subscription Form */}
          <div className="bg-background rounded-xl shadow-sm border p-8">
            <div className="max-w-lg mx-auto">
              <div className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full h-12 px-4 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && (
                    <p className="text-destructive text-sm mt-2 font-medium">
                      {error}
                    </p>
                  )}
                </div>
                <Button
                  onClick={handleSubscribeClick}
                  disabled={loading}
                  className="w-full h-12 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
                >
                  {loading ? "Checking..." : "Subscribe"}
                </Button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Secure & Private
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Weekly Updates
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                Unsubscribe Anytime
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Dialog */}
      <DialogContent className="sm:max-w-3xl">
        {showSuccessScreen ? (
          <div className="flex flex-col items-center justify-center text-center p-12">
            <svg
              className="w-16 h-16 text-green-500 mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Subscription Successful!
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Thank you for subscribing to the CAiRL newsletter. You're all set
              to receive the latest updates directly in your inbox. Please check
              your spam box as well for the confirmation.
            </p>
            <Button onClick={handleDialogClose} className="h-10 px-8 text-sm">
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader className="text-center pb-6 border-b">
              <DialogTitle className="text-2xl font-bold text-foreground">
                CAiRL Newsletters
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mt-2">
                Help us tailor our content for you. Your email:{" "}
                <span className="font-semibold text-foreground">{email}</span>
              </DialogDescription>
            </DialogHeader>

            <div className="py-6 space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                      <span className="text-muted-foreground">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="e.g., John"
                      className="h-11"
                      value={profile.firstName}
                      onChange={handleInputChange}
                      disabled={modalLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                      <span className="text-muted-foreground">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="e.g., Doe"
                      className="h-11"
                      value={profile.lastName}
                      onChange={handleInputChange}
                      disabled={modalLoading}
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="occupation" className="text-sm font-medium">
                      Which title best describes you?
                      <span className="text-muted-foreground">*</span>
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("occupation", value)
                      }
                      value={profile.occupation}
                      disabled={modalLoading}
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select your occupation" />
                      </SelectTrigger>
                      <SelectContent>
                        {occupationOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                      Company / Institution{" "}
                      <span className="text-muted-foreground">*</span>
                    </Label>
                    <Input
                      id="org"
                      placeholder="e.g., Acme Inc."
                      className="h-11"
                      value={profile.org}
                      onChange={handleInputChange}
                      disabled={modalLoading}
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-sm font-medium">
                      Country
                      <span className="text-muted-foreground">*</span>
                    </Label>
                    <Input
                      id="country"
                      placeholder="e.g., India"
                      className="h-11"
                      value={profile.country}
                      onChange={handleInputChange}
                      disabled={modalLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender" className="text-sm font-medium">
                      Gender <span className="text-muted-foreground">*</span>
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("gender", value)
                      }
                      value={profile.gender}
                      disabled={modalLoading}
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select your gender" />
                      </SelectTrigger>
                      <SelectContent>
                        {genderOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {interestsOptions.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-3 p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <Checkbox
                        id={item.id}
                        checked={profile.interests.includes(item.id)}
                        onCheckedChange={(checked) =>
                          handleInterestChange(item.id, checked)
                        }
                        disabled={modalLoading}
                      />
                      <Label
                        htmlFor={item.id}
                        className="text-sm font-medium cursor-pointer"
                      >
                        {item.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              <DialogFooter className="pt-4 flex-col">
                {modalError && (
                  <p className="text-destructive text-sm text-center font-medium">
                    {modalError}
                  </p>
                )}
                <div className="flex justify-center space-x-3 w-full">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="h-9 px-6 text-sm"
                      disabled={modalLoading}
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    onClick={handleProfileSubmit}
                    className="h-9 px-8 text-sm"
                    disabled={modalLoading}
                  >
                    {modalLoading ? "Subscribing..." : "Subscribe"}
                  </Button>
                </div>
              </DialogFooter>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default NewsLetters;
