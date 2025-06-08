'use client';

import { FormEvent, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import Modal from '../ui/modal';
import { useRouter } from 'next/navigation';

export default function CreateLocationForm() {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [geology, setGeology] = useState('');
  const [status, setStatus] = useState(true);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    alert('Form submitted!');
  };

  const router = useRouter();
  return (
    <Modal>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Country */}
          <div>
            <Label htmlFor="country">Country<span className="text-red-500">*</span></Label>
            <Input
              id="country"
              placeholder="Enter username"
              value={country}
              onChange={e => setCountry(e.target.value)}
              required
            />
          </div>
          {/* States */}
          <div>
            <Label htmlFor="states">States<span className="text-red-500">*</span></Label>
            <Select
              value={state}
              onValueChange={setState}
              required
            >
              <SelectTrigger id="states" className="w-full">
                <SelectValue placeholder="Select provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="state1">State 1</SelectItem>
                <SelectItem value="state2">State 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Geology */}
          <div>
            <Label htmlFor="geology">Geology (lat/lng)</Label>
            <Input
              id="geology"
              placeholder="Enter phone"
              value={geology}
              onChange={e => setGeology(e.target.value)}
            />
          </div>
          {/* Status */}
          <div className="flex flex-col justify-end">
            <Label htmlFor="status">Status</Label>
            <Switch
              id="status"
              checked={status}
              onCheckedChange={setStatus}
              className="mt-2"
            />
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="outline" type="button" onClick={() => router.back()}>
            Discard
          </Button>
          <Button type="submit">
            Create
          </Button>
        </div>
      </form>
    </Modal>
  );
}
