
In this project, developers will have the
opportunity to practice their coding skills
by identifying and fixing common mistakes
in React code. By actively engaging in
debugging and implementing the suggested 
solutions, coders can enhance their
understanding of React best practices and
improve their ability to write clean
and error-free code.

Mistake 1: Multiple loading States
Explanation: The code has two loading 
states defined: const [loading, setLoading]
= useState(false); and const
[loading, setLoading] = useState(true);.
This duplication can lead to
inconsistencies and confusion.
To fix the mistake, remove the const
[loading, setLoading] = useState(true);
declaration, and use only one loading state.

Mistake 2: Missing Dependency in the
First useEffect
Explanation: The first useEffect sets the
document title based on the count state.
However, it also modifies the loading state,
which is unnecessary and can lead to
undesired effects.
To fix the mistake, remove the line 
setLoading(true); from the first useEffect.

Mistake 3: Incorrect URL in the
fetchData Function
Explanation: The fetchData function is
attempting to fetch data from an incorrect
URL, https://api.example.com/data,
which is a placeholder.
To fix the mistake, update the URL in
the fetchData function to the
correct endpoint.

Mistake 4: Missing [] Dependency Array
in the Second useEffect
Explanation: The second useEffect is
missing the dependency array, which means
it will be re-run on every render,
causing unnecessary API calls.
To fix the mistake, add an empty
dependency array [] to the
second useEffect.

Mistake 5: Incorrect Usage of 
increment Function
Explanation: The increment function uses
the old count value directly when
updating the state, which can lead to
incorrect values due to the asynchronous
nature of state updates.
To fix the mistake, update the increment
function to use the functional
form of setCount.

Mistake 6: Undefined Function in the JSX
Explanation: The onClick handler for the
reset button references an undefined
function, reset.
To fix the mistake, replace
onClick={reset} with onClick={resetCount}.

Mistake 7: Redundant Loading State Check
Explanation: The code has redundant 
checks for the loading state in the
return statement.
To fix the mistake, remove the redundant
loading check in the return statement.



