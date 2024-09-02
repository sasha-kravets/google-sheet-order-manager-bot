export default async function formSubmitHandler(req, res) {
  try {
    // const { name, phone, product, price } = req.body;

    // await sendOrderDataToBot(name, phone, product, price);
    // await saveToGoogleSheets({ name, phone, product, price });

    console.log(req.body);
    res.status(200).send('Data processed successfully');
  } catch (error) {
    console.error('Error processing form data:', error);
    res.status(500).send('Internal server error');
  }
}