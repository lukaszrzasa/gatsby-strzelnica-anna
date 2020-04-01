import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from '../../atoms/Image'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ImageCover = styled.div`
  position: relative;
`;

const Price = styled.div`
  position: absolute;
  right: 0;
  top: 10px;
`;

const WeaponPrice = styled.div`
  position: absolute;
  right: 0;
  bottom: 10px;
`;

const AmmoItem = ({image, price, weapon, ammo, weaponPrice}) => {
  return (
    <Wrapper data-testid="ammo-item-wrapper">
      <ImageCover>
        <Image fluid={image}/>
        <Price data-testid="ammo-price">{price}</Price>
        <WeaponPrice data-testid="weapon-price">{weaponPrice}</WeaponPrice>
      </ImageCover>
      <div>
        <strong>Broń:</strong>
        <span data-testid="weapon-name">{weapon}</span>
      </div>
      <div>
        <strong>Amunicja:</strong>
        <span data-testid="ammo-name">{ammo}</span>
      </div>
    </Wrapper>
  )
}

AmmoItem.propTypes = {
  price: PropTypes.number.isRequired,
  weaponPrice: PropTypes.number,
  ammo: PropTypes.string.isRequired,
  weapon: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default AmmoItem