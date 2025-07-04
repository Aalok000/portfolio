'use client';

import React, { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { UserCheck } from 'lucide-react';

interface VisitorProfileSelectorProps {
  onProfileUpdate: (newProfile: string) => void;
  initialProfile: string | null;
}

const VisitorProfileSelector = ({ onProfileUpdate, initialProfile }: VisitorProfileSelectorProps) => {
  const [selectedProfile, setSelectedProfile] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (initialProfile) {
      setSelectedProfile(initialProfile);
    }
  }, [initialProfile]);

  const handleApplyProfile = () => {
    if (selectedProfile) {
      onProfileUpdate(selectedProfile);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please select a profile.',
      });
    }
  };

  return (
    <Card className="my-12 bg-card/50 border-primary/20">
      <CardHeader>
        <div className='flex items-center gap-4'>
          <UserCheck className="w-8 h-8 text-primary" />
          <div>
            <CardTitle className="font-headline text-xl">Personalize Your View</CardTitle>
            <CardDescription>
              Select your role to see the most relevant content first.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Select onValueChange={setSelectedProfile} value={selectedProfile}>
            <SelectTrigger className="w-full sm:w-[250px]">
              <SelectValue placeholder="What is your role?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recruiter">Recruiter / Hiring Manager</SelectItem>
              <SelectItem value="academic">Academic / Professor</SelectItem>
              <SelectItem value="developer" className="transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_5px_hsl(var(--accent))] focus:shadow-[0_0_20px_5px_hsl(var(--accent))]">
                Fellow Developer
              </SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleApplyProfile} className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
            Apply Filter
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VisitorProfileSelector;
