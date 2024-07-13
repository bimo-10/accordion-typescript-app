import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

import questions from "@/lib/data";
import { type Question } from "@/lib/type";

export default function QuestionCard() {
  const questionList: Question[] = questions;
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {questionList.map((question) => {
            return (
              <AccordionItem key={question.id} value={question.id.toString()}>
                <AccordionTrigger>{question.title}</AccordionTrigger>
                <AccordionContent>{question.info}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </CardContent>
    </Card>
  );
}
