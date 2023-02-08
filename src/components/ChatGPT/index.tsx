'use client'
import { Configuration, OpenAIApi } from 'openai'
import React, { useState } from 'react'
import styles from './index.module.scss'

const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION_KEY,
  apiKey: process.env.OPENAI_API_KEY,
})

const ChatGPT = () => {
  const openai = new OpenAIApi(configuration)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: input,
      max_tokens: 100,
    })

    console.log(completion.data.choices[0].text)
    setOutput(completion.data.choices[0].text || 'No response')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          placeholder='Lets talk to AI!'
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <div className={styles.buttonArea}>
          <button className={styles.button} type='submit'>
            Submit
          </button>
        </div>
      </form>
      <div>{output}</div>
    </div>
  )
}

export default ChatGPT
