const express = require('express');
const { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort, heapSort } = require('../controllers/sortingControllers');
const router = express.Router();

router.post('/bubble', bubbleSort);
router.post('/selection', selectionSort);
router.post('/insertion', insertionSort);
router.post('/merge', mergeSort);
router.post('/quick', quickSort);
router.post('/heap', heapSort);

module.exports = router;
