"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaGithub } from "react-icons/fa";

interface CardProjectsProps {
    title: string,
    text: string,
    tags: string,
    imgSrc: string,
    href: string,
}

const CardProjects:React.FC<CardProjectsProps> = ({
    title,
    text,
    tags,
    imgSrc,
    href
}) => {



  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {tags}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {text}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imgSrc}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl text-xs font-normal text-black dark:text-white" 
          >
            Github <FaGithub/>
          </CardItem>
          <a
            href={href}
            target="_blank"
            className="text-xs text-black dark:text-white"
          >
            Learn More →
          </a>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default CardProjects;