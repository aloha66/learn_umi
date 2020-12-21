import React,{FC} from 'react';
import { connect, HeroModelState, ConnectProps } from 'umi';

interface PageProps extends ConnectProps {
  hero:HeroModelState
}


const Hero:FC<PageProps> = props => {
  console.log("hero")
      return (
      <div>
        <h1>hero!</h1>
        <h2>{props.hero.name}</h2>
      </div>
    );
}

export default connect(({ hero }: { hero: HeroModelState }) => ({ hero }))(Hero);
// export default function() {
//     return (
//       <div>
//         <h1>hero!</h1>
//       </div>
//     );
//   }