import React from 'react'
import TableHeaderNav from './TableHeaderNav'
import TableFooter from './TableFooter'


interface ITable {
    children: React.ReactNode;
    title?: string;
    buttonText?: string;
    createPath?: string;
}

const Table = ({
    children,
    buttonText,
    createPath,
    title
}: ITable) => {
    return (
        <div className='bg-white rounded-xl'>
            <TableHeaderNav buttonText={buttonText} createPath={createPath} title={title} />
            {children}
            <TableFooter />
        </div>
    )
}

export default Table