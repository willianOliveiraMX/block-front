import React from "react";
import Grid from "./index.style";

type Props = {
  children: React.ReactChild | React.ReactChild[];
  flex: boolean;
  justifyContentEnd: boolean;
};

const GridWrapper = ({
  children,
  flex,
  justifyContentEnd,
}: Props): JSX.Element => {
  return (
    <Grid flex={flex} justifyContentEnd={justifyContentEnd}>
      {children}
    </Grid>
  );
};

export default GridWrapper;
