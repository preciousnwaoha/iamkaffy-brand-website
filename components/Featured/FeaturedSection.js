import React from "react";
import UIBigTitle from "../UI/UIBigTitle";
import Feature from "./Feature";
import FeatureInline from "./FeatureInline";
import classes from "./FeaturedSection.module.css";

const FeaturedSection = ({ featuredData }) => {
  const noOfFeatured = featuredData.length;
  const featuredDataOrganized = [...featuredData].sort(
    (a, b) => a.order - b.order
  );


  if (noOfFeatured < 1) {
    return;
  }

  return (
    <div className={classes["featured"]}>
      <UIBigTitle titleText={"Featured"} />

      {noOfFeatured > 2 ? (
        <>
          {featuredDataOrganized.slice(0, 2).map((feature) => (
            <Feature key={feature.id} feature={feature} />
          ))}
          {featuredDataOrganized.slice(2).map((feature) => (
            <FeatureInline key={feature.id} feature={feature} />
          ))}
        </>
      ) : (
        featuredDataOrganized.map((feature) => (
          <Feature key={feature.id} feature={feature} />
        ))
      )}
    </div>
  );
};

export default FeaturedSection;
