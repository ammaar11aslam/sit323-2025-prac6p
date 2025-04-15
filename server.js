const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

function validateTwoNumbers(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return 'Both num1 and num2 must be valid numbers.';
  }
  return null;
}

function validateOneNumber(num) {
  if (isNaN(num)) {
    return 'Input must be a valid number.';
  }
  return null;
}

// Basic operations
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateTwoNumbers(num1, num2);
  if (error) return res.status(400).json({ error });

  res.json({ result: parseFloat(num1) + parseFloat(num2) });
});

app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateTwoNumbers(num1, num2);
  if (error) return res.status(400).json({ error });

  res.json({ result: parseFloat(num1) - parseFloat(num2) });
});

app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateTwoNumbers(num1, num2);
  if (error) return res.status(400).json({ error });

  res.json({ result: parseFloat(num1) * parseFloat(num2) });
});

app.get('/divide', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateTwoNumbers(num1, num2);
  if (error) return res.status(400).json({ error });
  if (parseFloat(num2) === 0) return res.status(400).json({ error: 'Division by zero is not allowed.' });

  res.json({ result: parseFloat(num1) / parseFloat(num2) });
});

// Advanced operations
app.get('/exponent', (req, res) => {
  const { base, power } = req.query;
  const error = validateTwoNumbers(base, power);
  if (error) return res.status(400).json({ error });

  res.json({ result: Math.pow(parseFloat(base), parseFloat(power)) });
});

app.get('/sqrt', (req, res) => {
  const { num } = req.query;
  const error = validateOneNumber(num);
  if (error) return res.status(400).json({ error });
  if (parseFloat(num) < 0) return res.status(400).json({ error: 'Square root of negative number is not supported.' });

  res.json({ result: Math.sqrt(parseFloat(num)) });
});

app.get('/modulo', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateTwoNumbers(num1, num2);
  if (error) return res.status(400).json({ error });
  if (parseFloat(num2) === 0) return res.status(400).json({ error: 'Modulo by zero is not allowed.' });

  res.json({ result: parseFloat(num1) % parseFloat(num2) });
});

app.listen(port, () => {
  console.log(`calculator microservice running at http://localhost:${port}`);
});
