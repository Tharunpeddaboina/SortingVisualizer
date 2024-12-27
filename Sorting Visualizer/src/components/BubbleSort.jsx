export const bubbleSort = async (array, setArray, setHighlighted, pause) => {
    const tempArray = [...array];
    for (let i = 0; i < tempArray.length; i++) {
      for (let j = 0; j < tempArray.length - i - 1; j++) {
        setHighlighted([j, j + 1]);
        if (tempArray[j] > tempArray[j + 1]) {
          [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
          setArray([...tempArray]);
        }
        await pause(200);
        setHighlighted([]); 
      }
    }
  };
  