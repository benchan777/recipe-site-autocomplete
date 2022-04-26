class PrefixTreeNode:
    CHILDREN_TYPE = dict

    def __init__(self, character=None):
        self.character = character
        self.children = PrefixTreeNode.CHILDREN_TYPE()
        self.terminal = False

    def has_child(self, character):
        return True if character in self.children else False

    def add_child(self, character, child_node):
        if not self.has_child(character):
            self.children[character] = child_node
        else:
            raise ValueError(f'Child exists for character {character!r}')
