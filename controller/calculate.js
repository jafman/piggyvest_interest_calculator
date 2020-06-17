exports.calculateInterest = (req,res,next) => {
    const {amount, duration, product} = req.body;

    const productRate = {
        piggybank:0.10,
        flexnaira:0.10, 
        safelock:0.13, 
        flexdollars:0.06
    }
    if(!amount || !duration || !product){
        res.status(400).send({
            status: 'failed',
            data: {message: 'Enter amount.'}
          })
          return
    }
    if(product != "flexdollars" && product !="safelock" && product != "flexnaira" && product != "piggybank"){
        res.status(400).send({
            status: 'failed',
            data: {message: 'Select correct product.'}
          })
          return
    }

    const interest = productRate[product] / 365 * parseInt(duration) * parseFloat(amount);

    res.status(200).send({
        status: 'success',
        data: {interest: interest.toFixed(2)}
      })
      return


}