import React from "react";
import { Button } from "./ui/button";

import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaPinterest,
} from "react-icons/fa";
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
  const shareText = `${formattedQuote}\n\nGet daily inspiration at https://inspirationalquotes.fun/`;

  const encodedQuote = encodeURIComponent(shareText);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedQuote}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?quote=${encodedQuote}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=https://inspirationalquotes.fun/&summary=${encodedQuote}`;
  const whatsappUrl = `https://wa.me/?text=${encodedQuote}`;
  const telegramUrl = `https://t.me/share/url?url=https://inspirationalquotes.fun/&text=${encodedQuote}`;
  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=https://inspirationalquotes.fun/&description=${encodedQuote}`;

  return (
    <div className="flex items-center gap-2 bg-white p-2 rounded-lg">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open(twitterUrl, "_blank")}
              className="hover:text-blue-400"
            >
              <FaTwitter className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Share on Twitter</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open(facebookUrl, "_blank")}
              className="hover:text-blue-600"
            >
              <FaFacebook className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Share on Facebook</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open(linkedinUrl, "_blank")}
              className="hover:text-blue-700"
            >
              <FaLinkedin className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Share on LinkedIn</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="hover:text-blue-700"
            >
              <FaWhatsapp className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Share on WhatsApp</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open(telegramUrl, "_blank")}
              className="hover:text-blue-700"
            >
              <FaTelegram className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Share on Telegram</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open(pinterestUrl, "_blank")}
              className="hover:text-blue-700"
            >
              <FaPinterest className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Share on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SocialShare;
