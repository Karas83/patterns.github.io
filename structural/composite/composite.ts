abstract class Component {
    protected parent!: Component | null;

    public setParent(parent: Component | null) {
        this.parent = parent;
    }

    public getParent(): Component | null {
        return this.parent;
    }

    public add(component: Component): void { }

    public remove(component: Component): void { }

    public isComposite(): boolean {
        return false;
    }

    public abstract name(): string;
}


class Ball extends Component {
    public name(): string {
        return `New Ball`;
    }
}


class ballStore extends Component {
    protected children: Component[] = [];


    public add(component: Component): void {
        this.children.push(component);
        component.setParent(this);
    }

    public remove(component: Component): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);

        component.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }


    public name(): string {
        const results = [];
        for (const child of this.children) {
            results.push(child.name());
        }

        return `In this shop we have (${results.join('+')})`;
    }
}


function clientCode(component: Component) {
    

    console.log(`RESULT: ${component.name()}`);

    
}


const simple = new Ball();
clientCode(simple);
console.log('');


const tree = new ballStore();
const branch1 = new ballStore();
branch1.add(new Ball());
branch1.add(new Ball());
const branch2 = new ballStore();
branch2.add(new Ball());
tree.add(branch1);
tree.add(branch2);
clientCode(tree);
console.log('');