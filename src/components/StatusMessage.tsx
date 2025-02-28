import React from "react";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { cn } from "@/lib/utils";

type StatusType = "success" | "error" | "info";

interface StatusMessageProps {
  type?: StatusType;
  title?: string;
  message?: string;
  className?: string;
}

const StatusMessage = ({
  type = "info",
  title = "Information",
  message = "This is a status message",
  className,
}: StatusMessageProps) => {
  const variants = {
    success: {
      icon: CheckCircle2,
      className: "bg-green-50 text-green-900 border-green-200",
      title: title || "Success",
    },
    error: {
      icon: XCircle,
      className: "bg-red-50 text-red-900 border-red-200",
      title: title || "Error",
    },
    info: {
      icon: AlertCircle,
      className: "bg-blue-50 text-blue-900 border-blue-200",
      title: title || "Information",
    },
  };

  const variant = variants[type];
  const Icon = variant.icon;

  return (
    <Alert
      className={cn(
        "flex items-center border rounded-lg p-4 mb-4",
        variant.className,
        className,
      )}
    >
      <Icon className="h-5 w-5 mr-2" />
      <div>
        <AlertTitle className="font-semibold">{variant.title}</AlertTitle>
        <AlertDescription className="mt-1">{message}</AlertDescription>
      </div>
    </Alert>
  );
};

export default StatusMessage;
