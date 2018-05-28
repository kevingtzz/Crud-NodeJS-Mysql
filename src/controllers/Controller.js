const controller = {};

controller.index = (req, res) => {
  res.render('index')
};

controller.listStores = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM store', (err, store) => {
     if (err) {
      res.json(err);
     }
     res.render('store', {
        data: store
     });
    });
  });
};

controller.listStaff = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT staff_id, first_name, last_name, address_id FROM staff', (err, store) => {
     if (err) {
      res.json(err);
     }
     res.render('staff', {
        data: store
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO store set ?', data, (err, store) => {
      console.log(store);
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, store) => {
      console.log(store);
      res.render('store_edit', {
        data: store[0]
      });
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newStore = req.body; //campos del formulario
  req.getConnection((err, conn) => {

  conn.query('UPDATE customer set ? where id = ?', [newStore, id], (err, rows) => {
    res.redirect('/');
    });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
