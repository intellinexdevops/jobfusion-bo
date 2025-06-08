// Commade Generate Node generate.js Path name example Path name Location : Node generate.js Location
// Comade Delete Node generate.js -d Location

const fs = require('fs');
const path = require('path');

// Parse args
const isDelete = process.argv.includes('-d');
const resource = process.argv[isDelete ? 3 : 2];
if (!resource) {
  console.error('Usage: node generate.js [-d] ResourceName');
  process.exit(1);
}

const upper = resource[0].toUpperCase() + resource.slice(1);
const lower = resource[0].toLowerCase() + resource.slice(1);

const base = 'src/app';
const bases = 'src/components';

const files = [
  {
    path: `${bases}/pages/${upper}MainPage.tsx`,
    content: `
import React from 'react'
import Table from '../tables/Table'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"

function ${upper}MainPage() {
  return (
    <div className='mt-5 mx-4'>
      <Tabs defaultValue='all'>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="newest">Newest</TabsTrigger>
          <TabsTrigger value="oldest">Oldest</TabsTrigger>
        </TabsList>
        <TabsContent value='all'>
          <Table buttonText='New ${upper}' title='${upper} List' createPath='/${lower}/create' >
            <div>
              Hello ${upper}
            </div>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ${upper}MainPage
`.trim()
  },
  // Create Form with modal
  {
    path: `${bases}/forms/Create${upper}Form.tsx`,
    content: `
'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Create${upper}Form() { 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(true);

  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h2 className="font-semibold text-xl">New ${upper}</h2>
          <button
            onClick={() => router.back()}
            className="p-1 rounded hover:bg-gray-100 transition"
            aria-label="Close"
            type="button"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        {/* Modal Body */}
        <form className="px-6 py-8 space-y-8">
          <div className="grid grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <Label htmlFor="title" className="mb-1 flex items-center gap-1 text-base">
                Title<span className="text-red-500">*</span>
              </Label>
              <Input
                id="title"
                placeholder="Enter title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                className="rounded-md bg-gray-50 border border-gray-200 h-12 text-base"
              />
            </div>
            {/* Description */}
            <div>
              <Label htmlFor="description" className="mb-1 text-base">Description</Label>
              <Input
                id="description"
                placeholder="Enter description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="rounded-md bg-gray-50 border border-gray-200 h-12 text-base"
              />
            </div>
          </div>
          {/* Status */}
          <div>
            <Label htmlFor="status" className="mb-2 text-base">Status</Label>
            <div>
              <Switch
                id="status"
                checked={status}
                onCheckedChange={setStatus}
                className="scale-110"
                style={{ backgroundColor: status ? '#22c55e' : undefined }}
              />
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-start gap-3 pt-2">
            <Button
              variant="outline"
              type="button"
              className="bg-gray-100 text-gray-400 border border-gray-200 hover:bg-gray-200 rounded-lg font-semibold px-6 py-3"
              onClick={() => router.back()}
            >
              Discard
            </Button>
            <Button
              type="submit"
              className="bg-[#1877F2] text-white hover:bg-blue-700 rounded-lg font-semibold px-6 py-3"
            >
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
`.trim()
  },
  {
    path: `${base}/(app)/(modal)/${lower}/create/page.tsx`,
    content: `
import Create${upper}Form from '@/components/forms/Create${upper}Form'
import React from 'react'

export default function Page() {
    return <Create${upper}Form />
}
`.trim()
  },
  {
    path: `${base}/(app)/(routes)/(configuration)/${lower}/page.tsx`,
    content: `
import ${upper}MainPage from '@/components/pages/${upper}MainPage'
import React from 'react'

export default function Page() {
    return <${upper}MainPage/>
}
`.trim()
  },
  {
    path: `${base}/(app)/@modal/(.)${lower}/create/page.tsx`,
    content: `
import Create${upper}Form from '@/components/forms/Create${upper}Form'
import React from 'react'

export default function Page() {
    return <Create${upper}Form />
}
`.trim()
  },
];

// --- Delete helper functions ---
function deleteFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Deleted: ${filePath}`);
  } else {
    console.log(`Not found (skip): ${filePath}`);
  }
}
function removeEmptyDirs(filePath) {
  let dir = path.dirname(filePath);
  while (dir !== '.' && dir !== '/' && dir !== process.cwd()) {
    if (fs.existsSync(dir) && fs.readdirSync(dir).length === 0) {
      fs.rmdirSync(dir);
      dir = path.dirname(dir);
    } else {
      break;
    }
  }
}

// --- Create helper function ---
function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// --- Main ---
if (isDelete) {
  for (const file of files) {
    deleteFile(file.path);
    removeEmptyDirs(file.path);
  }
  console.log(`\nAll files for resource "${upper}" have been deleted!`);
} else {
  for (const file of files) {
    ensureDir(file.path);
    if (!fs.existsSync(file.path)) {
      fs.writeFileSync(file.path, file.content, 'utf8');
      console.log(`Created: ${file.path}`);
    } else {
      console.log(`Already exists: ${file.path}`);
    }
  }
  console.log(`\nAll files for resource "${upper}" have been generated!`);
}
