'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreateJobtypeForm() { 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(true);

  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h2 className="font-semibold text-xl">New Jobtype</h2>
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