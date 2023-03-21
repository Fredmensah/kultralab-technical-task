import React, { useRef, useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { DogItemComponent } from "../../screens/my-dogs/components/carousel-item/DogItem";
import { FLEXBOXROWCENTER } from "../../theme";
import { Dog } from "../../types/dog";
import { ScreenDimensions } from "../../utils/system-helpers";
import { PrimaryButton } from "../button/button";
import CarouselProps from "./Carousel.props";

// Default Props
const defaults = {
  height: 200,
  width: ScreenDimensions.width,
  delay: 5000,
};

export const Carousel: React.FC<CarouselProps> = ({
  items,
  deleteFunction,
}) => {
  const [selectedIndex, setselectedIndex] = useState(0);

  const scrollView = useRef();

  // Script will executed every time selectedIndex updates
  useEffect(() => {
    scrollView.current.scrollTo({
      animated: true,
      x: defaults.width * selectedIndex,
      y: 0,
    });
  }, [selectedIndex]);

  const setIndex = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    setselectedIndex(Math.floor(contentOffset.x / viewSize.width));
  };

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        ListEmptyComponent={
          <View>
            <Text>You dont have any dogs in your list</Text>
          </View>
        }
        onMomentumScrollEnd={setIndex}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        {items.map((dog: Dog, index: number) => (
          <DogItemComponent
            key={index}
            dog={dog}
            deleteFunction={(event) => deleteFunction(dog)}
          />
        ))}
      </ScrollView>
      {items.length > 0 && (
        <FLEXBOXROWCENTER>
          <PrimaryButton
            mode="secondary"
            title="Prev"
            onPress={() => setselectedIndex((prev: number) => prev - 1)}
            disabled={selectedIndex === 0}
          />
          <PrimaryButton
            mode="primary"
            title="Next"
            onPress={() => setselectedIndex((prev: number) => prev + 1)}
            disabled={selectedIndex === items.length - 1}
          />
        </FLEXBOXROWCENTER>
      )}
    </View>
  );
};

export default Carousel;
