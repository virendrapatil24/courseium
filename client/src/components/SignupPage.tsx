import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import IllustrationsSVG from "./../assets/illustration.svg";
import GoogleSVG from "./../assets/google-icon.svg";
import AppleSVG from "./../assets/apple-icon.svg";
import { Checkbox } from "./ui/checkbox";

const SignupPage = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-200 py-12 px-20">
      <div className="grid grid-cols-2 h-screen gap-12 mb-16">
        <Card className="mx-4 p-4">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Courseium</CardTitle>
            <CardDescription>
              Start your learning journey in seconds. Already have an account?{" "}
              <Button
                type="button"
                variant="link"
                className="text-sm font-bold text-violet-700 p-0 pl-1"
              >
                Log here.
              </Button>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <Label className="font-bold">First name</Label>
                    <Input></Input>
                  </div>
                  <div className="grid gap-2">
                    <Label className="font-bold">Last name</Label>
                    <Input></Input>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label className="font-bold">Email</Label>
                  <Input></Input>
                </div>
                <div className="grid gap-2">
                  <Label className="font-bold">Password</Label>
                  <Input></Input>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-full bg-gray-200 h-0.5 m-2"></div>
                  <span>or</span>
                  <div className="w-full bg-gray-200 h-0.5 m-2"></div>
                </div>
                <Button variant="outline" className="font-bold py-5">
                  <img src={GoogleSVG} className="w-5 h-5 m-2" />
                  Sign up with Google
                </Button>
                <Button variant="outline" className="font-bold py-5">
                  <img src={AppleSVG} className="w-5 h-5 m-2" />
                  Sign up with Apple
                </Button>
                <div className="flex justify-between space-x-2">
                  <Checkbox className="mt-1"></Checkbox>
                  <Label className="text-sm text-gray-500">
                    By signing up, you are creating a Courseium account, and you
                    agree to Courseium’s Terms of Use and Privacy Policy.
                  </Label>
                </div>
                <Button className="bg-violet-600 font-bold hover:bg-violet-700 py-5">
                  Create an Account
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="mx-auto my-auto">
          <img src={IllustrationsSVG} />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
