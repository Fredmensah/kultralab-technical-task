import { Dog, DogList } from "../../types/dog";

export default interface CarouselProps {
    items: DogList
    deleteFunction: ((dog: Dog) => void)
}