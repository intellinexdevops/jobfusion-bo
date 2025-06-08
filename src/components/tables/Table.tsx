import React from 'react'
import TableHeaderNav from './TableHeaderNav'
import TableFooter from './TableFooter'

const Table = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='bg-white rounded-xl'>
            <TableHeaderNav />
            {children}
            <TableFooter />
        </div>
    )
}

export default Table