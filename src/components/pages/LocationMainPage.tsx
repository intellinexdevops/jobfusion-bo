import React from 'react';
import Table from '../tables/Table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function LocationMainPage() {
  return (
    <div className="mt-5">
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="newest">Newest</TabsTrigger>
          <TabsTrigger value="oldest">Oldest</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Table buttonText="New Location" title="Location List" createPath="/location/create">
            <div>ghh</div>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default LocationMainPage;
