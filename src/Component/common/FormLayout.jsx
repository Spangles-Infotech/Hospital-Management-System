import React from 'react'
import { Form } from './Form'

export const FormLayout = ({data}) => {
  console.log("data", data)
  return (
    data.map((item, index) =>
      Array.isArray(item) ? (
        <div key={index} className="flex gap-[20px] w-full ">
          {item.map((it, i) => (
            Array.isArray(it) ?
              <div key={i} className="flex gap-[20px] w-full">
                {
                  it.map((ar, id)=>(
                    <Form key={ar.label} item={ar} />
                  ))
                }
              </div>
            :<Form key={it.label} item={it} />
          ))}
        </div>
      ) : (
        <Form key={item.label} item={item} />
      )
    )
  )
}
