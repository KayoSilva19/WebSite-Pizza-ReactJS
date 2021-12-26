import React from 'react';
import {
    FeatureContainer,
    FeatureButton
} from './FeatureElements';


export default function Feature() {
 return (
    <FeatureContainer>
        <h1> Pizza of the Day </h1>
        <p> Tuffle alfredi sauce topped with 24 carat gold dust. </p>
        <FeatureButton> Oreder Now </FeatureButton>
    </FeatureContainer>
  );
}