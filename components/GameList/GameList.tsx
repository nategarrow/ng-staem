import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

import Game from "./Game"
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type PropType = {
  list: GameType[]
}

type GameType = {
  id: number
  link: string
  image: string
  title: string
  price: number
  tags: string[]
  platforms: string[]
  genre: string
}

const GameList = ({ list }: PropType) => {
  gsap.registerPlugin(ScrollTrigger);

  const [count, setCount] = useState(5)
  const [shownList, setShownList] = useState<GameType[]>([])
  const gameRef = useRef<HTMLDivElement[]>([])

  // update shown list
  useEffect(() => {
    let newList: GameType[] = list?.slice(0, count)
    setShownList(newList)
  }, [count, list])

  // fade in game list
  useEffect(() => {
    gameRef.current.forEach((el: HTMLDivElement) => {
      gsap.to(el, {
        alpha: 1,
        left: 0,
        scrollTrigger: {
          trigger: el,
          start: "bottom bottom+=80",
          once: true,
        },
      })
    })
  }, [shownList])


  const handleIncrease = () => {
    setCount(prevCount => {
      return prevCount < list.length ? prevCount += 5 : list.length
    })
  }

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !gameRef.current.includes(el)) {
      gameRef.current.push(el)
    }
  }

  return (
    <>
      <ListTitle>New &amp; Trending</ListTitle>
      {shownList.length === 0 && <h2>Loading...</h2>}
      {shownList && shownList.map((game, index) => {
        return <Game ref={addToRefs} game={game} key={game.id} />
      })}
      <button className="blue-btn btn-large" onClick={handleIncrease}>View More</button>
    </>
  )
}

export default GameList

const ListTitle = styled.h2`
  position: relative;
  display: inline-block;
  color: white;
  font-size: 2rem;
  font-family: var(--font-title);
  margin-bottom: 80px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 10px;
    border-radius: 5px;
    width: 200px;
    background-color: var(--lightBlue);
  }

  &:before {
    right: 105%;
    width: 1000px;
  }
  &:after {
    right: -85%;
  }
`