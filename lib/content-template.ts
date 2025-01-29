import { facebook, twitter, instagram, youtube, tiktok, linkedin } from "@/public/_static/dashboard";


export const contentTemplates = [
{
  id : 1,
  name: "Facebook Post Description",
  desc: "An AI tool that generates Facebook post descriptions based on your input",
  category: "Facebook",
  icon: facebook,
  aiPrompt:
    "Give me Facebook post description ideas based on the provided outline and title, and return the result in good text format with bulletins where necessary",
  slug: "facebook-description",
  form: [
    {
      label: "Facebook Post Title",
      field: "input",
      name: "niche",
      required: true,
    },
    {
      label: "Enter Post Description Outline",
      field: "textarea",
      name: "outline",
    },
  ],
},
{ 
  id : 2,
  name: "Youtube Video Idea",
  desc: "An AI tool that generate Youtube Video Idea based on given information",
  category: "Youtube",
  icon: youtube,
  aiPrompt:
    "Give me youtube video idea on given video niche & outline topic and give me result in in good text format with bulletins where necessary",
  slug: "generate-youtube-video-idea",
  form: [
    {
      label: "Enter your video niche",
      field: "input",
      name: "niche",
      required: true,
    },
    {
      label: "Enter video outline",
      field: "textarea",
      name: "outline",
    },
  ],
},
{ 
  id : 3,
  name: "Instagram Hashtags",
  desc: "An AI tool that generate Instagram hashtags based on your post niche and outline information",
  category: "Instagram",
  icon: instagram,
  aiPrompt:
    "Give me some good examples of instagram hashtags on given niche & outline topic and give me result in good text format with bulletins where necessary",
  slug: "generate-instagram-hashtags",
  form: [
    {
      label: "Enter your post niche",
      field: "input",
      name: "niche",
      required: true,
    },
    {
      label: "Enter post outline",
      field: "textarea",
      name: "outline",
    },
  ],
},
{
  id : 4,
  name: "Tiktok Hashtags",
  desc: "An AI tool that generate Tiktok topic idea based on your post niche and outline information",
  category: "Tiktok",
  icon: tiktok,
  aiPrompt:
    "Give me some good examples of instagram hashtags on given niche & outline topic and give me result in in good text format with bulletins where necessary",
  slug: "generate-tiktok-hashtags",
  form: [
    {
      label: "Enter your post niche",
      field: "input",
      name: "niche",
      required: true,
    },
    {
      label: "Enter post outline",
      field: "textarea",
      name: "outline",
    },
  ],
},
{
  id : 5,
  name: "Linkedin Post",
  desc: "An AI tool that generate Linkedin Post idea based on your post niche and outline information",
  category: "Linkedin",
  icon: linkedin,
  aiPrompt:
    "Give me some good examples of Linkedin Post idea on given niche & outline topic and give me result in good text format with bulletins where necessary",
  slug: "generate-likedin-post",
  form: [
    {
      label: "Enter your post niche",
      field: "input",
      name: "niche",
      required: true,
    },
    {
      label: "Enter post outline",
      field: "textarea",
      name: "outline",
    },
  ],
},
{
  id : 6,
  name: "Tweet",
  desc: "An AI tool that generate Linkedin Post idea based on your post niche and outline information",
  category: "Tweet",
  icon: twitter,
  aiPrompt:
    "Give me 280 characters of tweet example on given niche & outline topic",
  slug: "generate-tweet-post",
  form: [
    {
      label: "Enter your tweet niche",
      field: "input",
      name: "niche",
      required: true,
    },
    {
      label: "Enter tweet outline",
      field: "textarea",
      name: "outline",
    },
  ],
},
];