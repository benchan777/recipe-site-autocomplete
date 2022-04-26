from prefix_tree_node import PrefixTreeNode


class PrefixTree:
    START_CHARACTER = ''

    def __init__(self, strings=None):
        self.root = PrefixTreeNode(PrefixTree.START_CHARACTER)
        self.size = 0
        if strings is not None:
            for string in strings:
                self.insert(string)

    def is_empty(self):
        return True if self.size == 0 else False

    def insert(self, string):
        parent = self.root
        for letter in string:
            if not parent.has_child(letter):
                new_node = PrefixTreeNode(letter)
                parent.add_child(letter, new_node)
                self.size += 1
            parent = parent.children[letter]
        parent.terminal = True

    def _find_node(self, string):
        if len(string) == 0:
            return self.root

        node = self.root

        for character in string:
            if not node.has_child(character):
                return []
            node = node.children[character]
        return node

    def complete(self, prefix):
        node = self._find_node(prefix)
        return self._traverse(node, prefix, []) if node else []

    def get_all(self):
        return self.complete('')

    def _traverse(self, node, prefix, visit):
        if node.terminal:
            visit.append(prefix)
        for letter in node.children:
            self._traverse(node.children[letter], prefix + letter, visit)
        return visit
