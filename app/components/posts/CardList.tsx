import React from 'react'

type CardListProps = {
    children: React.ReactNode;
};

const CardList = ({children}: CardListProps) => {
  return (
    <div className="flex gap-4 items-start overflow-x-scroll max-w-screen px-4">
      {children}
    </div>
  )
}

export default CardList
