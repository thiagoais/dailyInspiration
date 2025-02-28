import React from "react";
import { Button } from "./ui/button";
import { Twitter, Facebook, Linkedin /*, PinterestIcon*/ } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface SocialShareProps {
  quote?: string;
  author?: string;
}

const SocialShare = ({
  quote = "Life is what happens while you're busy making other plans.",
  author = "John Lennon",
}: SocialShareProps) => {
  // Create a beautifully formatted share text
  const formattedQuote = `"${quote}" - ${author}`;
  const shareText = `${formattedQuote}\n\nGet daily inspiration at dailyInspire.fun`;

  const encodedQuote = encodeURIComponent(shareText);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedQuote}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?quote=${encodedQuote}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=https://dailyInspire.fun&summary=${encodedQuote}`;
  //const pinterestUrl = `https://pinterest.com/pin/create/button/?url=https://dailyInspire.fun&description=${encodedQuote}`;

  return (
    <div className="flex items-center gap-2 bg-white p-2 rounded-lg">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(twitterUrl, "_blank")}
              className="hover:text-blue-400"
            >
              <Twitter className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Share on Twitter</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(facebookUrl, "_blank")}
              className="hover:text-blue-600"
            >
              <Facebook className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Share on Facebook</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(linkedinUrl, "_blank")}
              className="hover:text-blue-700"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Share on LinkedIn</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

/* Tooltip for Pinterest
<Tooltip>
  <TooltipTrigger asChild>
    <Button
      variant="ghost"
      size="icon"
      onClick={() => window.open(pinterestUrl, "_blank")}
      className="hover:text-red-600"
    >
      <PinterestIcon className="h-5 w-5" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Share on Pinterest</p>
  </TooltipContent>
</Tooltip>
*/

export default SocialShare;
