import {
  facebook,
  twitter,
  instagram,
  youtube,
  tiktok,
  linkedin,
} from "@/public/_static/dashboard";
import { StaticImageData } from "next/image";

export type FormField = {
  label: string;
  field: "input" | "textarea";
  name: string;
  required?: boolean;
};

export type ContentTemplate = {
  id: number;
  name: string;
  desc: string;
  category: string;
  icon: StaticImageData;
  aiPrompt: string;
  slug: string;
  form: FormField[];
};

export const contentTemplates: ContentTemplate[] = [
  {
    id: 1,
    name: "Facebook Post Description",
    desc: "Generate engaging Facebook post descriptions based on your title and outline.",
    category: "Facebook",
    icon: facebook,
    aiPrompt:
      "Give me Facebook post description ideas based on the provided niche and outline. Return the result in clean text format with bullet points where appropriate.",
    slug: "facebook-description",
    form: [
      {
        label: "Post Title / Topic",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Post Description Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    id: 2,
    name: "YouTube Video Idea",
    desc: "Generate YouTube video ideas based on your niche and content outline.",
    category: "Youtube",
    icon: youtube,
    aiPrompt:
      "Give me YouTube video ideas based on the provided niche and outline. Return the result in clean text format with bullet points where appropriate.",
    slug: "generate-youtube-video-idea",
    form: [
      {
        label: "Video Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Video Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    id: 3,
    name: "Instagram Hashtags",
    desc: "Generate high-performing Instagram hashtags for your post niche.",
    category: "Instagram",
    icon: instagram,
    aiPrompt:
      "Give me a set of effective Instagram hashtags based on the provided niche and outline. Return the result in clean text format with bullet points where appropriate.",
    slug: "generate-instagram-hashtags",
    form: [
      {
        label: "Post Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Post Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    id: 4,
    name: "TikTok Hashtags",
    desc: "Generate trending TikTok hashtags to maximize your video reach.",
    category: "TikTok",
    icon: tiktok,
    aiPrompt:
      "Give me a set of effective TikTok hashtags based on the provided niche and outline. Return the result in clean text format with bullet points where appropriate.",
    slug: "generate-tiktok-hashtags",
    form: [
      {
        label: "Post Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Post Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    id: 5,
    name: "LinkedIn Post",
    desc: "Generate professional LinkedIn post ideas for your niche and audience.",
    category: "LinkedIn",
    icon: linkedin,
    aiPrompt:
      "Give me professional LinkedIn post ideas based on the provided niche and outline. Return the result in clean text format with bullet points where appropriate.",
    slug: "generate-linkedin-post",
    form: [
      {
        label: "Post Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Post Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    id: 6,
    name: "Tweet / X Post",
    desc: "Generate punchy 280-character tweets for your topic or niche.",
    category: "Tweet",
    icon: twitter,
    aiPrompt:
      "Give me 5 tweet examples of under 280 characters each based on the provided niche and outline. Keep them punchy and engaging.",
    slug: "generate-tweet-post",
    form: [
      {
        label: "Tweet Niche / Topic",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Tweet Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
];
