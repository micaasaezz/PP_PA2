import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import "../styles/PokeStyles.css";
import Title from '../atoms/Title';
import PokeAvatar from '../atoms/PokeAvatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


export default function PokeRow({ pokeInfo, handleGoBack }) {

  return (
    <div>
      {
        pokeInfo !== undefined && (
          <div>
            <Card className={"card-poke-container"}>
              <CardContent>
                <Title className={"card-poke-title"} title={pokeInfo.name} />
                <GridList cellHeight={160}cols={2}>
                  {pokeInfo.imgUrl.map((img) => (
                    <GridListTile key={img}>
                      <PokeAvatar alt={pokeInfo.name} src={img} />
                    </GridListTile>
                  ))}
                </GridList>
                <Title title={".Rango: " + pokeInfo.range} />
                <Title title={pokeInfo.abilities.length > 0 ? ".Abilities:" : "Este poke no tiene abilities"} />
                {
                  pokeInfo.abilities.length > 0
                  && pokeInfo.abilities.map(poke => {
                    return <Title key={poke.ability.name} title={poke.ability.name} />
                  })
                }
              </CardContent>
              <CardActions className={"card-back-button"}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleGoBack}
                  size="small"
                >
                  Back
                </Button>
              </CardActions>
            </Card>
          </div>
        )
      }
    </div>
  )
}
