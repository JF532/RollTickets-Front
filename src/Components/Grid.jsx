import React from 'react'
import Card from "./Card"

export default function Grid() {
  return (
    <div>
      <div className='flex justify-center mt-20 items-center'>
      
              <div class="grid grid-cols-4 gap-4">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
              </div>
      
            </div>
    </div>
  )
}
