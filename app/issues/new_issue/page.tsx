"use client";

import { Button, TextField } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssue = () => {
  return (
    <div className="space-y-3 max-w-xl">
      <TextField.Root placeholder="Title">
        <TextField.Slot></TextField.Slot>
      </TextField.Root>
      <SimpleMDE>t</SimpleMDE>
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssue;
