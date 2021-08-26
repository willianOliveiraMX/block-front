import React from "react";
import Grid from "./index.style";

type Props = {
  children: React.ReactChild | React.ReactChild[];
  flex?: boolean;
  justifyContentEnd?: boolean;
  justifyContentCenter?: boolean;
  marginTop?: string;
};

const defaultProps = {
  flex: false,
  justifyContentEnd: false,
  justifyContentCenter: false,
  marginTop: "",
};

const GridWrapper = ({
  children,
  flex,
  justifyContentEnd,
  justifyContentCenter,
  marginTop,
}: Props): JSX.Element => {
  return (
    <Grid
      flex={flex}
      justifyContentEnd={justifyContentEnd}
      justifyContentCenter={justifyContentCenter}
      marginTop={marginTop}
    >
      {children}
    </Grid>
  );
};

GridWrapper.defaultProps = defaultProps;

export default GridWrapper;
