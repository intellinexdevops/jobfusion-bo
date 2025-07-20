import React from 'react';
import UserDashboard from './UserDashboard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Table from '../tables/Table';

const UserMainPage = () => {
  return (
    <div className="p-4">
      <UserDashboard />
      {/* Content */}
      <div className="mt-5">
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="newest">Newest</TabsTrigger>
            <TabsTrigger value="oldest">Oldest</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <Table title="User List" buttonText="New User" createPath="/user/create">
              <div>User Alll</div>
            </Table>
          </TabsContent>
          <TabsContent value="newest">Change your password here.</TabsContent>
          <TabsContent value="oldest">Oldest</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserMainPage;
