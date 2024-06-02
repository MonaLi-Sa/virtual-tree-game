let growthStage = 1;
let tree = document.getElementById('tree');
let message = document.getElementById('message');

function waterTree() {
    if (growthStage < 4) {
        growthStage++;
        updateTree();
        message.textContent = 'You watered the tree!';
    } else {
        message.textContent = 'The tree is fully grown!';
    }
}

function fertilizeTree() {
    if (growthStage < 4) {
        growthStage++;
        updateTree();
        message.textContent = 'You fertilized the tree!';
    } else {
        message.textContent = 'The tree is fully grown!';
    }
}

function pruneTree() {
    if (growthStage > 1) {
        growthStage--;
        updateTree();
        message.textContent = 'You pruned the tree!';
    } else {
        message.textContent = 'The tree is at its initial stage!';
    }
}

function updateTree() {
    tree.src = `tree_stage${growthStage}.png`;
    tree.style.transform = `scale(${1 + (growthStage - 1) * 0.2})`;
}
