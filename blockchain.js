
class Blockchain {
  constructor () {
    // Create chain and transaction
    this.chain = [];
    this.current_transactions = [];

    // Binding of this
    this.newBlock = this.newBlock.bind(this);
    this.newTransaction = this.newTransaction.bind(this);
    this.lastBlock = this.lastBlock.bind(this);
    this.proofOfWork = this.proofOfWork.bind(this);
  }

  newBlock() { 
    /* Create the new block */ 
  }

  newTransaction() { 
    /* Store a new transaction */ 
  }

  hash(block) { 
    /* hash the block */ 
  }

  lastBlock() { 
    /* return the last block */
  }
}

module.exports = Blockchain;