"use client";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Mail, Share2, Copy, Check } from "lucide-react";
import { FaTwitter, FaLinkedinIn, FaWhatsapp, FaTelegram, FaFacebook } from "react-icons/fa";
import { toast } from "sonner";
import { Modal } from "@/components/ui/modal";

const PLATFORMS = [
  {
    name: "Twitter",
    Icon: FaTwitter,
    color: "#000000",
    buildUrl: (content: string) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(content)}`,
  },
  {
    name: "LinkedIn",
    Icon: FaLinkedinIn,
    color: "#0A66C2",
    buildUrl: (content: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?summary=${encodeURIComponent(content)}`,
  },
  {
    name: "WhatsApp",
    Icon: FaWhatsapp,
    color: "#25D366",
    buildUrl: (content: string) =>
      `https://wa.me/?text=${encodeURIComponent(content)}`,
  },
  {
    name: "Telegram",
    Icon: FaTelegram,
    color: "#26A5E4",
    buildUrl: (content: string) =>
      `https://t.me/share/url?text=${encodeURIComponent(content)}`,
  },
  {
    name: "Facebook",
    Icon: FaFacebook,
    color: "#1877F2",
    buildUrl: (content: string) =>
      `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(content)}`,
  },
] as const;

function ShareModalContent({
  showShareModal,
  setShowShareModal,
  content,
  title,
}: {
  showShareModal: boolean;
  setShowShareModal: Dispatch<SetStateAction<boolean>>;
  content: string;
  title?: string;
}) {
  const [copied, setCopied] = useState(false);

  const preview =
    content.length > 150 ? `${content.slice(0, 150)}…` : content;

  const canShare =
    typeof navigator !== "undefined" && typeof navigator.share === "function";

  const handlePlatformShare = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleNativeShare = async () => {
    try {
      await navigator.share({
        title: title ?? "AI-generated content",
        text: content,
      });
    } catch {
      // user cancelled or not supported
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal
      showModal={showShareModal}
      setShowModal={setShowShareModal}
      className="md:max-w-lg"
    >
      <div className="px-6 pb-2 pt-6">
        <h3 className="text-base font-semibold text-foreground">Share Content</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Share your AI-generated content to social platforms
        </p>
      </div>

      <div className="mx-6 my-3 rounded-xl bg-muted/50 px-4 py-3">
        <pre className="line-clamp-4 whitespace-pre-wrap font-sans text-xs leading-relaxed text-muted-foreground">
          {preview}
        </pre>
      </div>

      <div className="px-6 pb-6">
        <div className="grid grid-cols-4 gap-2">
          {PLATFORMS.map(({ name, Icon, color, buildUrl }) => (
            <button
              key={name}
              type="button"
              onClick={() => handlePlatformShare(buildUrl(content))}
              className="flex flex-col items-center gap-1.5 rounded-xl p-3 transition-colors hover:bg-muted"
            >
              <Icon size={22} style={{ color }} />
              <span className="text-[10px] font-medium text-muted-foreground">
                {name}
              </span>
            </button>
          ))}

          <button
            type="button"
            onClick={() =>
              handlePlatformShare(
                `mailto:?subject=${encodeURIComponent(title ?? "AI-generated content")}&body=${encodeURIComponent(content)}`
              )
            }
            className="flex flex-col items-center gap-1.5 rounded-xl p-3 transition-colors hover:bg-muted"
          >
            <Mail size={22} className="text-muted-foreground" />
            <span className="text-[10px] font-medium text-muted-foreground">
              Email
            </span>
          </button>

          {canShare && (
            <button
              type="button"
              onClick={handleNativeShare}
              className="flex flex-col items-center gap-1.5 rounded-xl p-3 transition-colors hover:bg-muted"
            >
              <Share2 size={22} className="text-muted-foreground" />
              <span className="text-[10px] font-medium text-muted-foreground">
                Share
              </span>
            </button>
          )}

          <button
            type="button"
            onClick={handleCopy}
            className="flex flex-col items-center gap-1.5 rounded-xl p-3 transition-colors hover:bg-muted"
          >
            {copied ? (
              <Check size={22} className="text-green-500" />
            ) : (
              <Copy size={22} className="text-muted-foreground" />
            )}
            <span className="text-[10px] font-medium text-muted-foreground">
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>
        </div>
      </div>
    </Modal>
  );
}

export function useShareModal({
  content,
  title,
}: {
  content: string;
  title?: string;
}) {
  const [showShareModal, setShowShareModal] = useState(false);

  const ShareModalCallback = useCallback(() => {
    return (
      <ShareModalContent
        showShareModal={showShareModal}
        setShowShareModal={setShowShareModal}
        content={content}
        title={title}
      />
    );
  }, [showShareModal, setShowShareModal, content, title]);

  return useMemo(
    () => ({ setShowShareModal, ShareModal: ShareModalCallback }),
    [setShowShareModal, ShareModalCallback],
  );
}
