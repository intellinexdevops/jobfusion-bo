import React from 'react'
import Table from '../tables/Table'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"

function SkillMainPage() {
  return (
    <div className='mt-5 mx-4'>
      <Tabs defaultValue='all'>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="newest">Newest</TabsTrigger>
          <TabsTrigger value="oldest">Oldest</TabsTrigger>
        </TabsList>
        <TabsContent value='all'>
          <Table buttonText='New Skill' title='Skill List' createPath='/skill/create' >
            <div>
              Hello Skill
            </div>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default SkillMainPage