import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const NewsLetters = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="bg-secondary py-24 flex flex-col justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Stay Connected
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to stay ahead in AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your Email"
              className="flex-grow px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <DialogTrigger asChild>
              <Button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
                Submit
              </Button>
            </DialogTrigger>
          </div>
        </div>
      </div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Complete your profile</DialogTitle>
          <DialogDescription>
            Please provide some additional information.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="firstName" placeholder="First Name" className="col-span-4" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="lastName" placeholder="Last Name" className="col-span-4" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="occupation" placeholder="Occupation" className="col-span-4" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit">Submit</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewsLetters;
