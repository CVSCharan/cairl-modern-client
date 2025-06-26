import React from "react";
import { BackgroundGradient } from "./bg-gradient";

export const GradientExample: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Gradient Component Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Example 1: Basic usage */}
        <BackgroundGradient>
          <div className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Basic Gradient</h3>
            <p className="text-muted-foreground">
              This is a basic example of the BackgroundGradient component using the default animation.
            </p>
          </div>
        </BackgroundGradient>

        {/* Example 2: Without animation */}
        <BackgroundGradient animate={false}>
          <div className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Static Gradient</h3>
            <p className="text-muted-foreground">
              This example has the animation disabled, showing a static gradient effect.
            </p>
          </div>
        </BackgroundGradient>

        {/* Example 3: With custom content */}
        <BackgroundGradient containerClassName="col-span-1 md:col-span-2">
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Custom Content Example</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              The BackgroundGradient component can wrap any content, making it versatile for various UI elements like cards, CTAs, or feature highlights.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Primary Action
              </button>
              <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary/10 transition-colors">
                Secondary Action
              </button>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default GradientExample;