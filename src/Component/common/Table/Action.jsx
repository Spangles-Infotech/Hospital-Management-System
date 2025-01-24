import React from 'react'

export const Action = ({actionData}) => {
  return (
    <div className='flex gap-[15px] items-center h-full px-6 py-3'>
        {
            actionData.map((item)=>(
                <img 
                  key={item.name} 
                  src={require(`../../../assests/${item.name}.png`)} alt="eye-icon" className={`size-[25px] object-contain cursor-pointer`} 
                  onClick={()=>item.onClick()}
                />
            ))
        }
    </div>
  )
}
