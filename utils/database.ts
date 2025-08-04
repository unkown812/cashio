import * as SQLite from 'expo-sqlite';
import type { SQLiteDatabase } from 'expo-sqlite';

const db: SQLiteDatabase = SQLite.openDatabase('userdata.db');

export const initDatabase = () => {
  db.transaction((tx: any) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY NOT NULL,
        amount REAL NOT NULL,
        description TEXT,
        date TEXT NOT NULL
      );`,
      [],
      () => {
        console.log('Transactions table created or already exists');
      },
      (_: any, error: any) => {
        console.log('Error creating transactions table:', error);
        return false;
      }
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS cards (
        id INTEGER PRIMARY KEY NOT NULL,
        bankName TEXT NOT NULL,
        cardNumber TEXT NOT NULL,
        cardHolder TEXT NOT NULL,
        expiryDate TEXT NOT NULL,
        gradientStart TEXT NOT NULL,
        gradientEnd TEXT NOT NULL
      );`,
      [],
      () => {
        console.log('Cards table created or already exists');
      },
      (_: any, error: any) => {
        console.log('Error creating cards table:', error);
        return false;
      }
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        balance REAL NOT NULL
      );`,
      [],
      () => {
        console.log('Users table created or already exists');
      },
      (_: any, error: any) => {
        console.log('Error creating users table:', error);
        return false;
      }
    );
  });
};

export const insertTransaction = (amount: number, description: string, date: string) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: any) => {
      tx.executeSql(
        `INSERT INTO transactions (amount, description, date) VALUES (?, ?, ?);`,
        [amount, description, date],
        (_: any, result: any) => {
          resolve(result);
        },
        (_: any, error: any) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

export const fetchTransactions = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: any) => {
      tx.executeSql(
        `SELECT * FROM transactions ORDER BY date DESC;`,
        [],
        (_: any, { rows }: any) => {
          resolve(rows._array);
        },
        (_: any, error: any) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

export const insertCard = (bankName: string, cardNumber: string, cardHolder: string, expiryDate: string, gradientStart: string, gradientEnd: string) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: any) => {
      tx.executeSql(
        `INSERT INTO cards (bankName, cardNumber, cardHolder, expiryDate, gradientStart, gradientEnd) VALUES (?, ?, ?, ?, ?, ?);`,
        [bankName, cardNumber, cardHolder, expiryDate, gradientStart, gradientEnd],
        (_: any, result: any) => {
          resolve(result);
        },
        (_: any, error: any) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

export const fetchCards = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: any) => {
      tx.executeSql(
        `SELECT * FROM cards ORDER BY id DESC;`,
        [],
        (_: any, { rows }: any) => {
          resolve(rows._array);
        },
        (_: any, error: any) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

export const deleteCard = (id: number) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: any) => {
      tx.executeSql(
        `DELETE FROM cards WHERE id = ?;`,
        [id],
        (_: any, result: any) => {
          resolve(result);
        },
        (_: any, error: any) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

export const insertUser = (name: string, balance: number) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: any) => {
      tx.executeSql(
        `INSERT INTO users (name, balance) VALUES (?, ?);`,
        [name, balance],
        (_: any, result: any) => {
          resolve(result);
        },
        (_: any, error: any) => {
          reject(error);
          return false;
        }
      );
    });
  });
};
