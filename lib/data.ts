import React from "react";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
    {
        name: "Home",
        hash: "#",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Education",
        hash: "#education",
    },
    {
        name: "Learning",
        hash: "#learning",
    },
    {
      name: "Contact",
      hash: "#contact",
  },

] as const;

export const BioData = [
  {
    title: "SMA Negeri 33 Jakarta",
    description: " I led the Basketball organization from 2018 to 2019. Organized the annual Basketball Cup. ",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2020",
  },
  {
    title: "Bunda Mulia University ",
    description: " I served as the leader of the Computer Science Student Association. Organized seminars, study classes, LKMM, and company visits from 2023 until now.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Now",
  },
  {
    title: "Event Division",
    description: "Responsible for ensuring the success of events. Making new and schedules events every week. Communicate with bands and Worship Leader to ensure harmony when playing",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "Chief Committee 'Kebaktian Padang' event in local Church",
    description: "Responsible for ensuring the success of the event and communicating with other members. Required me effective communication with  delegation of tasks, and problem-solving skills to address any challenges that arose during the planning and execution phases. ",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Part-time Game Master",
    description: "Interacted with customers to explain game rules and mechanics, ensuring an enjoyable and immersive experience. Managed game sessions, including setup, rules explanation, and guidance throughout gameplay to maintain a smooth and enjoyable flow.Addressed any issues or questions raised by players during gameplay, offering assistance and solutions to ensure a positive experience.Communicated clearly and effectively to convey game rules, objectives, and strategies to players of varying experience levels.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
] as const;

export const SkillsData = [
  {
      skillName: "CSS",
      proficiency: "Intermediate"
  },
  {
      skillName: "HTML",
      proficiency: "Intermediate"
  },
  {
    skillName: "Tailwindcss",
    proficiency: "Intermediate"
  },
  {
    skillName: "BootStrap",
    proficiency: "Intermediate"
  },
  {
    skillName: "JavaScript",
    proficiency: "Beginner"
  },
  {
    skillName: "Kotlin",
    proficiency: "Beginner"
  },
  {
    skillName: "Dart",
    proficiency: "Beginner"
  },
  {
    skillName: "TypeScript",
    proficiency: "Beginner"
  },
  {
    skillName: "PHP",
    proficiency: "Beginner"
  },
  {
    skillName: "NextJS",
    proficiency: "Beginner"
  },
] as const


