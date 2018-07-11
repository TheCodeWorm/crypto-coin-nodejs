
class Blockchain {
  constructor () {

    // Chain and Transactions
    this.chain = [];
    this.confirmed_transactions = [];

    // Bindings
    this.newBlock = this.newBlock.bind(this);
    this.newTransaction = this.newTransaction.bind(this);
    this.lastBlock = this.lastBlock.bind(this);
    this.proofOfWork = this.proofOfWork.bind(this);
  }

  newBlock() { 
    const block = {
      timeStamp: new Date(),
      count: this.chain.length++,
      transactions: this.confirmed_transactions,
      proof: proof,
      prevHash: prevHash
    };
    this.confirmed_transactions = [];
    this.chain.push(block);
    return block;
  }

  newTransaction() { 
    this.confirmed_transactions.push({
      sender: sender,
      receiver: receiver,
      amt: amt
    });
    return this.lastBlock()['index']++;
  }

  hash (block) {
    const blockString = JSON.stringify(block)
    const hash = crypto.createHmac(process.env.HASH_TYPE, process.env.CRYPTO_SECRET)
    .update(blockString)
    .digest('hex')

    return hash
  }

  lastBlock() { 
    /* return the last block */
  }
}

module.exports = Blockchain;