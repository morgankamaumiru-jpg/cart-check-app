import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Plus, ShoppingCart } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export interface ShoppingItem {
  id: string;
  name: string;
  price: number;
  purchased: boolean;
}

export default function ShoppingList() {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");

  const addItem = () => {
    if (!newItemName.trim()) {
      toast({
        title: "Item name required",
        description: "Please enter an item name",
        variant: "destructive",
      });
      return;
    }

    const price = parseFloat(newItemPrice) || 0;
    
    const newItem: ShoppingItem = {
      id: Math.random().toString(36).substr(2, 9),
      name: newItemName.trim(),
      price,
      purchased: false,
    };

    setItems(prev => [...prev, newItem]);
    setNewItemName("");
    setNewItemPrice("");
    
    toast({
      title: "Item added",
      description: `${newItem.name} added to your shopping list`,
    });
  };

  const togglePurchased = (id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    );
  };

  const deleteItem = (id: string) => {
    const item = items.find(item => item.id === id);
    setItems(prev => prev.filter(item => item.id !== id));
    
    if (item) {
      toast({
        title: "Item removed",
        description: `${item.name} removed from your list`,
      });
    }
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const remainingPrice = items
    .filter(item => !item.purchased)
    .reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <ShoppingCart className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Shopping List</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Keep track of your shopping items and budget
          </p>
        </div>

        {/* Add Item Form */}
        <Card className="mb-8 shadow-soft border-0">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex gap-4 flex-col sm:flex-row">
                <Input
                  placeholder="Enter item name..."
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addItem()}
                  className="flex-1 border-muted focus:border-primary transition-colors"
                />
                <Input
                  type="number"
                  step="0.01"
                  placeholder="Price ($)"
                  value={newItemPrice}
                  onChange={(e) => setNewItemPrice(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addItem()}
                  className="w-full sm:w-32 border-muted focus:border-primary transition-colors"
                />
                <Button 
                  onClick={addItem}
                  className="bg-primary hover:bg-primary/90 transition-all duration-300 shadow-soft"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card className="shadow-soft border-0">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground">{items.length}</div>
              <div className="text-sm text-muted-foreground">Total Items</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft border-0">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground">${totalPrice.toFixed(2)}</div>
              <div className="text-sm text-muted-foreground">Total Budget</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft border-0">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">${remainingPrice.toFixed(2)}</div>
              <div className="text-sm text-muted-foreground">Remaining</div>
            </CardContent>
          </Card>
        </div>

        {/* Shopping Items */}
        <div className="space-y-3">
          {items.length === 0 ? (
            <Card className="shadow-soft border-0">
              <CardContent className="p-8 text-center">
                <div className="text-muted-foreground">
                  <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Your shopping list is empty</p>
                  <p className="text-sm">Add some items to get started!</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            items.map((item) => (
              <Card 
                key={item.id} 
                className={`shadow-soft border-0 transition-all duration-300 ${
                  item.purchased 
                    ? 'bg-success/5 border-success/20' 
                    : 'hover:shadow-lg'
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <Checkbox
                      checked={item.purchased}
                      onCheckedChange={() => togglePurchased(item.id)}
                      className="data-[state=checked]:bg-success data-[state=checked]:border-success"
                    />
                    <div className="flex-1">
                      <h3 className={`font-medium ${
                        item.purchased 
                          ? 'line-through text-muted-foreground' 
                          : 'text-foreground'
                      }`}>
                        {item.name}
                      </h3>
                    </div>
                    <div className={`font-bold ${
                      item.purchased 
                        ? 'text-muted-foreground line-through' 
                        : 'text-foreground'
                    }`}>
                      ${item.price.toFixed(2)}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteItem(item.id)}
                      className="text-destructive border-destructive/20 hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}