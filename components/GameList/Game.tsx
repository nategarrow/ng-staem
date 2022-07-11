import React from 'react'
import styled from 'styled-components';

interface GameInterface {
  game: {
    id: number
    link: string
    image: string
    title: string
    price: number
    tags: string[]
    platforms: string[]
    genre: string
  }
}

const Game = React.forwardRef<HTMLDivElement, GameInterface>((props, ref) => {
  const { game } = props
  const { title, image, tags, price, platforms } = game

  return (
    <GameWrapper ref={ref}>
      <GameImgWrapper>
        <img src={image} alt={`${title} Cover Art`} />
      </GameImgWrapper>
      <GameDescWrapper>
        <div className="description">
          <div className="title-container">
            <h3 className="title">{title}</h3>
            <p className="genre">{tags.join(' ')}</p>
          </div>
          <div className="platform-container">
            {platforms.includes('Windows') &&
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H18.9621V18.9538H0V0ZM21.0379 0H40V18.9538H21.0379V0ZM0 21.0379H18.9621V40H0V21.0379ZM21.0379 21.0379H40V40H21.0379" fill="#214B6B" />
              </svg>
            }
          </div>
        </div>
        <hr />
        <p className="price">${price === 0 ? `0.00` : price}</p>
      </GameDescWrapper>
    </GameWrapper>
  )
})
Game.displayName = "Game";


export default Game

const GameWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 2rem;
  background: #17202D;
  border-radius: var(--border-radius);
  min-height: 70px;
  overflow: hidden;
  opacity: 0;
  left: -40px;

  @media (max-width: 799px) {
    flex-direction: column; 
  }
`
const GameImgWrapper = styled.div`
  flex: .7;

  img {
    display: block;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1350px) {
    flex: 1; 
  }
`
const GameDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 33px 34px;

  .description {
    display: flex;
    justify-content: space-between;

    > div {
      width: 50%;
    }
  }

  .title {
    font-family: var(--font-title);
    font-size: 1.5rem;
    color: var(--white);
  }
  .genre {
    font-size: 1rem;
    color: var(--white-50);
  }
  .platform-container {
    svg {
      display: block;
      margin-left: auto;
    }
  }
  .price {
    margin-left: auto;
    font-size: 2rem;
  }

  @media (max-width: 799px) {
    
  }
`
